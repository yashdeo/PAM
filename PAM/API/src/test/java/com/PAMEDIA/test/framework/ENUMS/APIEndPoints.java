package com.PAMEDIA.test.framework.ENUMS;

// All the endpoints will be mentioned here along with the expected parameters inside of the {} bracket
public enum APIEndPoints {

    CITY_NAME("/api/location/search/?query={city_name}"),
    LONGITUDE_LATTITUDE("/api/location/search/?lattlong={lattitude},{longitude}"),
    WEATHER_CITY_DATE("/api/location/{city_woeid}/{date}");

    private String url;

    APIEndPoints(String url) {
        this.url = url;
    }
    public String getUrl(){
        return url;
    }
}
