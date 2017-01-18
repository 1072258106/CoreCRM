using System;
using System.Linq;
using System.Threading.Tasks;
using CoreCRM.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CoreCRM.Models
{
    public static class SeedData
    {
        public static async Task Initialize(IServiceProvider serviceProvider, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            var options = serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>();
            using (var context = new ApplicationDbContext(options)) {
                // Create the tables.
                context.Database.EnsureCreated();

                // Look for any users.
                if (context.Users.Any()) {
                    return; // DB has been seeded.
                }

                var profile = new Profile
                {

                };
                context.Profiles.Add(profile);
                await context.SaveChangesAsync();

                var user = new ApplicationUser() {
                    ProfileID = profile.Id,
                    UserName = "admin",
                    Email = "admin@163.com"
                };
                var result = await userManager.CreateAsync(user, "11aaAA_");

                profile.AccountID = user.Id;
                context.Update(profile);
                await context.SaveChangesAsync();

                await roleManager.CreateAsync(new IdentityRole("Administrator"));
                await roleManager.CreateAsync(new IdentityRole("Employee"));

                await userManager.AddToRoleAsync(user, "Administrator");
            }
        }
    }
}
