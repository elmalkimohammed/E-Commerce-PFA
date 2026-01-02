using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
namespace dotNET.Models
{
    public class ProduitListModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        [BsonElement("price")]
        public decimal Price { get; set; }
        [BsonElement("stock")]
        public int Stock { get; set; }
        [BsonElement("attributes")]
        public Dictionary<string, string> Attributes { get; set; }
        [BsonElement("images")]
        public List<string> Images { get; set; }

    }
}