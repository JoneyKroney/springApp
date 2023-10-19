package Connect.ConnectTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
//import <group>.<artifact>.repo.PersonRepo;
//import <group>.<artifact>.model.Person;

@RestController
public class PersonController {
    @Autowired
    PersonRepo repo;

    @PostMapping("/addPerson")
    public void addPerson(@RequestBody Person person) {
        // Accepts an object of the type "Person" this is the same as the object/json you will send to the /addPerson route later on in this guide
        repo.save(person); // Appends the new "Person" to the table
    }
}