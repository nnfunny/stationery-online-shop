using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using server.Models;

namespace server.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly MySqlDatabase MySqlDatabase;
        
        public ProductController(MySqlDatabase mySqlDatabase)
        {
            MySqlDatabase = mySqlDatabase;
        }

        // For all GET requests
        private async Task<ActionResult<IEnumerable<Product>>> GetProductByCommand(MySqlCommand cmd)
        {
            List<Product> list = new List<Product>();
            using(var reader = await cmd.ExecuteReaderAsync())
            {
                while(await reader.ReadAsync())
                {
                    list.Add(new Product()
                    {
                        Id = Convert.ToInt32(reader["product_id"]),
                        ProductName = reader["name"].ToString(),
                        Category = reader["category_name"].ToString(),
                        ImagePath = reader["path"].ToString(),
                        Price = Convert.ToDouble(reader["price"]),
                        Description = reader["description_text"].ToString(),
                        ImageGroupId = DBNull.Value.Equals(reader["group_id"]) ? 0 : Convert.ToInt32(reader["group_id"]),
                        Options = DBNull.Value.Equals(reader["options"]) ? 0 : Convert.ToInt32(reader["options"])
                    });
                }
            }
            return list;

        }

        // GET: api/product
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProduct()
        {
            MySqlCommand cmd = MySqlDatabase.Connection.CreateCommand();
            cmd.CommandText = "SELECT"
                + " product.product_id," 
                + "product.name,"
                + "category.category_name,"
                + "image.path," 
                + "description.price,"
                + "description.description_text,"
                + "product.group_id,"
                + "product.options" 
            + " FROM product" 
                + " INNER JOIN image ON product.img_id = image.img_id" 
                + " INNER JOIN description ON product.description_id = description.description_id"
                + " INNER JOIN category ON product.category_id = category.category_id;";
            return await GetProductByCommand(cmd);
        }

        // GET: api/product/<category_name>
        [HttpGet("{category}")]
        // Categories: mail, give, notes, write, read, organize
        public async Task<ActionResult<IEnumerable<Product>>> GetProductByCategory(string category)
        {
            // Console.WriteLine(category);
            MySqlCommand cmd = MySqlDatabase.Connection.CreateCommand();
            cmd.CommandText = @"SELECT product.product_id, product.name, category.category_name, image.path, description.price, description.description_text, product.group_id, product.options FROM product INNER JOIN image ON product.img_id = image.img_id INNER JOIN description ON product.description_id = description.description_id INNER JOIN category ON product.category_id = category.category_id WHERE category.category_name = @Category";
            cmd.Parameters.AddWithValue("@Category", category);
            
            return await GetProductByCommand(cmd);
        }

        // GET: api/product/find?Id=<id>
        [HttpGet("find")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductById(long Id)
        {
            MySqlCommand cmd = MySqlDatabase.Connection.CreateCommand();
            cmd.CommandText = @"SELECT product.product_id, product.name, category.category_name, image.path, description.price, description.description_text, product.group_id, product.options FROM product INNER JOIN image ON product.img_id = image.img_id INNER JOIN description ON product.description_id = description.description_id INNER JOIN category ON product.category_id = category.category_id WHERE product.product_id = @Id";
            cmd.Parameters.AddWithValue("@Id", Id);

            return await GetProductByCommand(cmd);
        }

        // GET: api/product/group/
        [HttpGet("group/{id}")]
        public async Task<ActionResult<IEnumerable<string>>> GetProductGroup(long id)
        {
            List<string> path = new List<string>();
            MySqlCommand cmd = MySqlDatabase.Connection.CreateCommand();
            cmd.CommandText = @"SELECT product.product_id, group_product.img_path FROM product INNER JOIN group_product ON group_product.group_id = product.product_id where product.product_id = @Id";
            cmd.Parameters.AddWithValue("@Id", id);
            using(var reader = await cmd.ExecuteReaderAsync())
                while(await reader.ReadAsync())
                    path.Add(reader["img_path"].ToString());
                    
            return path;
        }
    }
}