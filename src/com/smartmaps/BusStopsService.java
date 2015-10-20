package com.smartmaps;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("locations/")
public class BusStopsService {

	@Path("list")
	@GET
	public Response busService() {
		
		return Response.ok("Here Comes The List :) ").build();
	}
	
}
