namespace server.Models
{
    public class Product
    {
        public int Id {get; set;}
        public string ProductName {get; set;}
        public string Category {get; set;}
        public string ImagePath {get; set;}
        public double Price {get; set;}
        public string Description {get; set;}
        public int ImageGroupId {get; set;}
        public int Options {get; set;}
    }
}