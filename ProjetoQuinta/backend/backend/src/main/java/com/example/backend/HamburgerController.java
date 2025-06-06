@RestController
@RequestMapping("/hamburgers")
@CrossOrigin(origins = "*")
public class HamburgerController {

    @Autowired
    private HamburgerRepository repository;

    @GetMapping
    public List<Hamburger> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Hamburger create(@RequestBody Hamburger hamburger) {
        return repository.save(hamburger);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
