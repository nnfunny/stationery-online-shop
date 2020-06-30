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
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private MySqlDatabase MySqlDatabase {get; set;}

        public CategoryController(MySqlDatabase mySqlDatabase)
        {
            MySqlDatabase = mySqlDatabase;
        }

        // GET: api/category
        public async Task<ActionResult<IEnumerable<Category>>> GetCategory()
        {
            List<Category> list = new List<Category>();
            MySqlCommand cmd = MySqlDatabase.Connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM category";
            using(var reader = await cmd.ExecuteReaderAsync())
            {
                while(await reader.ReadAsync())
                {
                    list.Add(new Category()
                    {
                        Id = Convert.ToInt32(reader["category_id"]),
                        CategoryName = reader["category_name"].ToString()
                    });
                }
            }
            return list;
        }
    }
}