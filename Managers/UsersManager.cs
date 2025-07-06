using Tutoriel.Models;

namespace Tutoriel.Managers
{
    public class UsersManager
    {
        public User GetUserById(int id)
        {
            // Exemple : retourne un utilisateur basé sur l'id passé
            return new User
            {
                Id = id,
                Name = "John Doe"
            };
        }
    }
}