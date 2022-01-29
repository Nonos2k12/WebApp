using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Demande
    {
        public int Id { get; set; }
        [Required]
        public string Nom { get; set; }
        [Required]
        public string Prenom { get; set; }
        [Required]
        public string NomSociete { get; set; }
        [Required]
        public string TypeDemande { get; set; }
        public string? Email { get; set; }
        public string? Telephone { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public int? UserId { get; set; }

        public Demande()
        {

        }
    }
}
