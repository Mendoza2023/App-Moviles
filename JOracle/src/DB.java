import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB {
    String getInfo(){
        //String jdbcUrl = "jdbc:oracle:thin:@localhost:1521:ee";
        String jdbcUrl = "jdbc:oracle:thin:@(description=(address=(host=localhost)(protocol=tcp)(port=1521))(connect_data=(sid=ee)(SERVER=DEDICATED)))";
        String username = "escolar";
        String password = "t0ps3cret";
        String resp="";
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
        } catch (ClassNotFoundException e) {
            return "Oracle JDBC driver not found";
        }

        // Establishing the connection
        try {
            Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
            if (connection != null) {
                connection.close(); // Remember to close the connection when done
                return "Connected to the database!";
            }
        } catch (SQLException e) {

            resp="Connection failed!";
        }
        return resp;
    }

}