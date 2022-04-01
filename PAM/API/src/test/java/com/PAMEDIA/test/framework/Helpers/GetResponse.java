package com.PAMEDIA.test.framework.Helpers;

import com.PAMEDIA.test.framework.ENUMS.APIEndPoints;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

// This class will return the response for the different URL's and the parameters
public class GetResponse {

    static Response response;
    static String url;

    //hit city endpoint and return the results
    public static Response getLocationID(String city_name) {
        url = APIEndPoints.CITY_NAME.getUrl();
        return response = given().log().all().when().get(url,city_name);
    }

    public static Response getWOEID_Latt_Long(String latitude, String longitude){
        url = APIEndPoints.LONGITUDE_LATTITUDE.getUrl();
        return response = given().log().all().when().get(url,latitude,longitude);
    }

    public static Response getWeatherDetails(String woeid, String date){
        url = APIEndPoints.WEATHER_CITY_DATE.getUrl();
        return response = given().log().all().when().get(url,woeid,date);
    }

}
