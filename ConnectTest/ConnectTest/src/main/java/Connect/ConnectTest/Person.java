package Connect.ConnectTest;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "person") // Sets the table name
public class Person {
    // Everything here defines what rows/values will be available
    // in the table
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    private String name;
}