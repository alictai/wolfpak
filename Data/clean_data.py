import csv

class Room:
	def __init__(self, building, room, descrip, setup, cap):
		self.building = building
		self.room = room
		self.descrip = descrip
		self.setup = setup
		self.cap = cap
	def set_code(self, code):
		self.building_code = code
	def print_self(self):
		print self.building, ",", self.building_code, ",", self.room, ",", self.descrip, ",", self.setup, ",", self.cap 

def building_codes(filename, pulleddate):
	codes = {}
	with open(filename, 'rU') as csvfile:
		rdr = csv.reader(csvfile, delimiter=',', quotechar='|')
		for row in rdr:
			if(row[0] != 'Tufts University' and row[0] != 'Building' and row[0] != '' and row[0] != pulleddate):
				codes[row[1].strip('"')] = row[0]
	return codes


def parse_file(filename, bcodes, pulleddate):
	output = []
	curr_building = ""
	with open(filename, 'rU') as csvfile:
		rdr = csv.reader(csvfile, delimiter=',', quotechar='|')
		possible_caps = []
		for row in rdr:
			#set the room/building header
			if (row[1] == '' and row[2] == '' and row[3] == '' and row[4] == '' and row[5] == '' and row[6] == '' and row[7] == '' and row[8] == '' and row[9] == '' and row[10] == ''):
				curr_building = row[0]
			elif (row[0] == '' and row [8]):
				possible_caps.append(int(row[9]))
			else:
				# updating previous capacity based on the additional configurations
				if (len(possible_caps) > 0):
					output[len(output) - 1].cap = max(possible_caps)
					possible_caps = []

				# ignoring the random header lines everywhere
				if (row[0] != 'Tufts University' and row[0] != 'Room' and row[0] != pulleddate and row[0] != ''):
					# room description has a fucking comma in it
					cap = ''
					if (row[8] != '0'):
						#print row
						description = row[2] + row[3]
						description = description.strip('"')
						cap = Room(curr_building, row[0], description, row[7], int(row[10]))
					#room description does not have a comma in it
					else:
						cap = Room(curr_building, row[0], row[2], row[7], int(row[9]))
					cap.set_code(bcodes[curr_building])
					output.append(cap)
	#for obj in output:
	#	obj.print_self()
	return output

def write_new(newfilename, data):
	with open(newfilename, 'wb') as csvfile:
		wrtr = csv.writer(csvfile, delimiter=',') #, quotechar=' ', quoting=csv.QUOTE_ALL)
		wrtr.writerow(["Building", "Code", "Room", "Room_Code", "Description", "Capacity"])
		for obj in data:
			room_code = obj.building_code + " " + obj.room
			wrtr.writerow([obj.building, obj.building_code, obj.room, room_code, obj.descrip, obj.cap])

def main():
	codes = building_codes('Building_Code_List_Computer_Science_Project.csv', '10/30/2014 2:45 PM NR')
	parsed = parse_file('Room_Capacities_Computer_Science_Project.csv', codes, '10/30/2014 2:43 PM NR')
	write_new('Rooms.csv', parsed)

if __name__ == '__main__':
	main()
