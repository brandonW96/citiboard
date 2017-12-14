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
	user = models.OneToOneField(User, blank = False, null = False)
	Is_In_Use = False;
	Is_Reserved = False; 
	Is_Broken = False; 
	AVAILABILITY = True; 
	   
	def __str__ (self):
		if AVAILABILITY  == True:
			return "Board %d is currently available" % (self.Board_ID)
		else :
			return "Board %d is currently unavailable" % (self.Board_ID)
	
class Rider(models.Model)
	
	