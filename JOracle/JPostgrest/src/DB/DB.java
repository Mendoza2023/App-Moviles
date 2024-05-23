package DB;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB {
    public String getInfo(){
        // URL JDBC para PostgreSQL
        String jdbcUrl = "jdbc:postgresql://localhost:5432/school";
        String username = "postgres";
        String password = "sonicx123";
        String resp = "";
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            return "PostgreSQL JDBC driver not found";
        }

        // Estableciendo la conexión
        try {
            Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
            if (connection != null) {
                connection.close(); // Recuerda cerrar la conexión cuando termines
                return "Connected to the database!";
            }
        } catch (SQLException e) {
            resp = "Connection failed!";
        }
        return resp;
    }
}
