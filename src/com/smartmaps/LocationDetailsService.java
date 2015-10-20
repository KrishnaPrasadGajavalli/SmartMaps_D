package com.smartmaps;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("update/")
public class LocationDetailsService {
	
	@Path("fromdb")
	@GET
	public Response getBusStops() {
		
		return Response.ok("getBusStops() ").build();
	}

	@Path("todb")
	@GET
	public Response updateBusStops() {
		
		return Response.ok("updateBusStops() ").build();
	}

}
