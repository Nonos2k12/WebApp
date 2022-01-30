#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using WebApp.Data;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class DemandesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DemandesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Demandes
        [Authorize]
        public async Task<IActionResult> Index()
        {
            return View(await _context.Demande.ToListAsync());
        }

        // GET: Demandes/Details/5
        [Authorize]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var demande = await _context.Demande
                .FirstOrDefaultAsync(m => m.Id == id);
            if (demande == null)
            {
                return NotFound();
            }

            return View(demande);
        }

        // GET: Demandes/Create
        [Authorize]
        public IActionResult Create()
        {
            return View();
        }

        // POST: Demandes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> Create([Bind("Id,Nom,Prenom,NomSociete,TypeDemande,Email,Telephone,Date,IdUser")] Demande demande)
        {
            if (ModelState.IsValid)
            {
                _context.Add(demande);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(demande);
        }

        // GET: Demandes/Edit/5
        [Authorize]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var demande = await _context.Demande.FindAsync(id);
            if (demande == null)
            {
                return NotFound();
            }
            return View(demande);
        }

        // POST: Demandes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nom,Prenom,NomSociete,TypeDemande,Email,Telephone,Date,UserId")] Demande demande)
        {
            if (id != demande.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(demande);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DemandeExists(demande.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(demande);
        }

        // GET: Demandes/Delete/5
        [Authorize]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var demande = await _context.Demande
                .FirstOrDefaultAsync(m => m.Id == id);
            if (demande == null)
            {
                return NotFound();
            }

            return View(demande);
        }

        // POST: Demandes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var demande = await _context.Demande.FindAsync(id);
            _context.Demande.Remove(demande);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DemandeExists(int id)
        {
            return _context.Demande.Any(e => e.Id == id);
        }

        /*public IActionResult List()
        {
            return PartialView();
        }*/

        public ActionResult List()
        {
            return PartialView("_List");
        }

        /*public async Task<IActionResult> List(Demande demande)
        {
            return PartialView(await _context.Demande.ToListAsync());
        }*/

        /*public PartialViewResult List(object model)
        {

            var ListeDemandes = from Demande in ApplicationDbContext.
                                    select Events;

            recommendedevents = recommendedevents.Where(s => s.Recommended.Equals(true));
            
            return PartialView(model: List);
        }*/
    }
}
