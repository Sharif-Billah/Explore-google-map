import React, { useState } from 'react';
import { DirectionsRenderer, GoogleMap, LoadScript, DirectionsService } from '@react-google-maps/api';

const location = {
    lat: 23.791599,
    lng: 90.389099
};

const Direction = ({ origin, destination }) => {

    const [response, setResponse] = useState(null);

    const directionsCallback = res => {
        if (res != null) {
            setResponse(res);
        }
    }

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    id='direction-example'
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    zoom={10}
                    center={location
                    }

                >

                    <DirectionsService
                        options={{
                            destination: origin,
                            origin: destination,
                            travelMode: 'DRIVING'
                        }}
                        callback={directionsCallback}

                    />


                    {
                        response !== null && (
                            <DirectionsRenderer
                                options={{
                                    directions: response
                                }}

                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;