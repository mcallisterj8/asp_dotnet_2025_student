using System.Text.Json.Serialization;

namespace TrefleApp.Server.Models.Trefle.Responses;

public class PlantResponse {
    [JsonPropertyName("data")]
    public Plant? Data { get; set; }

    [JsonPropertyName("meta")]
    public SinglePlantMeta? Meta { get; set; }

}

public class SinglePlantMeta {
    [JsonPropertyName("last_modified")]
    public DateTime? LastModified { get; set; }
}

public class Plant {
    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("common_name")]
    public string? CommonName { get; set; }

    [JsonPropertyName("slug")]
    public string? Slug { get; set; }

    [JsonPropertyName("scientific_name")]
    public string? ScientificName { get; set; }

    [JsonPropertyName("year")]
    public int Year { get; set; }

    [JsonPropertyName("author")]
    public string? Author { get; set; }

    [JsonPropertyName("genus_id")]
    public int GenusId { get; set; }

    [JsonPropertyName("image_url")]
    public string? ImageUrl { get; set; }

}