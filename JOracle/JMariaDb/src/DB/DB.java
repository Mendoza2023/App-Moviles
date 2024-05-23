package DB;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB {
    public String getInfo(){
        // URL JDBC para MariaDB
        String jdbcUrl = "jdbc:mariadb://localhost:3306/student";
        String username = "root";
        String password = "sonicx123";
        String resp = "";
        try {
            Class.forName("org.mariadb.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            return "MariaDB JDBC driver not found";
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
