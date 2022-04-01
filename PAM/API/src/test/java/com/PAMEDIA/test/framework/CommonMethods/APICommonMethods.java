package com.PAMEDIA.test.framework.CommonMethods;

import com.PAMEDIA.test.framework.POJOs.WeatherDetails;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class APICommonMethods {

    private static final Logger LOG = LoggerFactory.getLogger(APICommonMethods.class);

    // Extract the response code from the response
    public static int extractStatusCode(Response response) {
        return response.getStatusCode();
    }

    // Method will check if the particular string is a part of the received response
    public static boolean compareMessage(Response response, String message) {
        return response.body().asString().contains(message);
    }

    //Below method will validate the response and check if all the fields populates the value
    public static boolean countArrays(Response response) {

        //Setting the default boolean to true
        boolean pass = true;
        // getting the total records from the response
        int arraySize = response.jsonPath().getList("$").size();
        JsonPath jsonPath = response.jsonPath();

        // Loop to traverse through all the records within the reponse and check the populating the fields
        for (int i = 0; i < arraySize; i++) {
            String id = jsonPath.get("id[" + i + "]").toString();
            try {
                // Creating the Pojo object
                WeatherDetails weatherDetails = new WeatherDetails();

                weatherDetails.setId(jsonPath.get("id[" + i + "]").toString());
                LOG.info(weatherDetails.getId());

                weatherDetails.setAir_pressure(jsonPath.get("weather_state_name[" + i + "]").toString());
                LOG.info(weatherDetails.getAir_pressure());

                weatherDetails.setWeather_state_abbr(jsonPath.get("weather_state_abbr[" + i + "]").toString());
                LOG.info(weatherDetails.getWeather_state_abbr());

                weatherDetails.setWind_direction_compass(jsonPath.get("wind_direction_compass[" + i + "]").toString());
                LOG.info(weatherDetails.getWind_direction_compass());

                weatherDetails.setCreated(jsonPath.get("created[" + i + "]").toString());
                LOG.info(weatherDetails.getCreated());

                weatherDetails.setApplicable_date(jsonPath.get("applicable_date[" + i + "]").toString());
                LOG.info(weatherDetails.getApplicable_date());

                weatherDetails.setMin_temp(jsonPath.get("min_temp[" + i + "]").toString());
                LOG.info(weatherDetails.getMin_temp());

                weatherDetails.setMax_temp(jsonPath.get("max_temp[" + i + "]").toString());
                LOG.info(weatherDetails.getMin_temp());

                weatherDetails.setThe_temp(jsonPath.get("the_temp[" + i + "]").toString());
                LOG.info(weatherDetails.getThe_temp());

                weatherDetails.setWind_speed(jsonPath.get("wind_speed[" + i + "]").toString());
                LOG.info(weatherDetails.getWind_speed());

                weatherDetails.setAir_pressure(jsonPath.get("air_pressure[" + i + "]").toString());
                LOG.info(weatherDetails.getAir_pressure());

                weatherDetails.setHumidity(jsonPath.get("humidity[" + i + "]").toString());
                LOG.info(weatherDetails.getHumidity());

                weatherDetails.setVisibility(jsonPath.get("visibility[" + i + "]").toString());
                LOG.info(weatherDetails.getVisibility());

                weatherDetails.setPredictability(jsonPath.get("predictability[" + i + "]").toString());
                LOG.info(weatherDetails.getPredictability());

            } catch (Exception exception) {
                LOG.error(exception.toString());
                // Setting the boolean to false in case of any field which does not contain the value
                pass = false;
            }
        }
        return pass;
    }

    // Method will check the content type from the message
    public static String getContentType(Response response) {
        return response.headers().get("Content-Type").toString();
    }
}
