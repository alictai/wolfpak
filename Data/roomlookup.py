import csv

roomcodes = {}
departmentcodes = {}
buildingcodes = {}

class Course:
	def __init__(self, course_code, t, ct, inst, sd, ed, days, st, et, loc, rt, enroll, crds):
		self.code = course_code
		self.title = t
		self.course_type = ct 
		self.instructor = inst
		self.start_date = sd
		self.end_date = ed
		self.weekdays = days
		self.start_time = st
		self.end_time = et
		self.location = loc
		self.room_type = rt
		self.enrolled = int(enroll)
		self.credits = crds
	def print_self(self):
		print self.code, ",", self.title, ",", self.instructor, ",", self.location, ",", self.enrolled

"""def building_codes(filename, pulleddate):
	codes = {}
	with open(filename, 'rU') as csvfile:
		rdr = csv.reader(csvfile, delimiter=',', quotechar='|')
		for row in rdr:
			if(row[0] != 'Tufts University' and row[0] != 'Building' and row[0] != '' and row[0] != pulleddate):
				codes[row[1].strip('"')] = row[0]
	return codes"""

def build_dictionaries(departments, rooms):
	with open(departments, 'rU') as csvfile:
		rdr = csv.reader(csvfile, delimiter=',', quotechar='|')
		for row in rdr: 
			departmentcodes[row[0]] = row[1]
	with open(rooms, 'rU') as csvfile:
		rdr = csv.reader(csvfile, delimiter=',', quotechar='|')
		for row in rdr:
			roomcodes[row[3]]= row[4]
			buildingcodes[row[3]] = row[0]
	#print departmentcodes
	#print roomcodes

def parse_file(filename):
	output = []
	with open(filename, 'rU') as csvfile:
		rdr = csv.reader(csvfile, delimiter=',', quotechar='|')
		for row in rdr:
			if row[0] != "Course":
				curr_course = Course(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12])
				output.append(curr_course)
	#for c in output:
	#	c.print_self()
	return output

def write_new(newfilename, data):
	with open(newfilename, 'wb') as csvfile:
		wrtr = csv.writer(csvfile, delimiter=',') #, quotechar=' ', quoting=csv.QUOTE_ALL)
		wrtr.writerow(["Course", "Title", "CourseType", "Instructor", "StartDate", "EndDate", "Weekdays", "StartTime", "EndTime", "Location", "RoomType", "Enrolled", "Credits", "Department", "BuildingName", "RoomName"])
		for obj in data:
			dept_code = obj.code.split()[0]
			department_title = departmentcodes[dept_code]
			#print obj.title
			room_title = roomcodes[obj.location]
			building_title = buildingcodes[obj.location]
			wrtr.writerow([obj.code, obj.title, obj.course_type, obj.instructor, obj.start_date, obj.end_date, obj.weekdays, obj.start_time, obj.end_time, obj.location, obj.room_type, obj.enrolled, obj.credits, department_title, building_title, proom_title])

def main():
	build_dictionaries('DepartmentCodes.csv', 'Rooms.csv')
	parsed = parse_file('CourseLocations.csv')
	write_new('CourseLocations2.csv', parsed)

if __name__ == '__main__':
	main()
