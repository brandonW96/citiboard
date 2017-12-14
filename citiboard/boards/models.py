# -*- coding: utf-8 -*-
import uuid
from __future__ import unicode_literals
from django.contrib.auth.models import User

from django.db import models

# Create your models here.
class Board(models.Model)
	""" 
		Defining the model for Boards
	"""
	#fields 
	Board_ID = models.UUIDField(primary_key=True, default = uuid.uuid4, editable=False)
	user = models.OneToOneField(User, blank = True, null = False)
	station = models.ForeignKey(Station, blank = False, null = False)
	Is_In_Use = False
	Is_Reserved = False 
	Is_Broken = False
	AVAILABILITY = True
	   
	def __str__ (self):
		if AVAILABILITY  == True:
			return "Board %d is currently available" % (self.Board_ID)
		else :
			return "Board %d is currently unavailable" % (self.Board_ID)
			
	def check_Available(self):
		if Is_Broken == False:
			if Is_In_Use == False:
				if Is_Reserved == False:
					AVAILABILITY = True
		else:
			AVAILABILIY = False
	
				
		
					
class Station(models.Model)
	""" 
		Defining the model for Stations
	"""
	Station_ID = models.UUISField(primary_key = True, default = uuid.uuid4, editable = False)
	max_Num_Bikes = models.IntegerField(deafult = 0)
	curr_Num_Bikes = models.IntegerField(deafult = 20)
	
	def __str__ (self):
		return "%s" %Station_ID
		
	def bike_Rented(self):
		curr_Num_Bikes--
	def bike_Returned(self):
		curr_Num_Bikes++
	
	