

import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
            System.out.println(getDateOffset(-180,"2022-11-04T10:38:22.000Z"));


    }
    public static String getDateOffset(int offset,String date){

       String time1= Instant.parse( date )
                .atOffset(ZoneOffset.ofHours(offset*(-1)/60))
                .format(
                        DateTimeFormatter.ofPattern( "uuuu-MM-dd HH:mm:ss" )
                );

        return time1;
    }
}

