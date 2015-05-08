import csv

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


def parse_file(filename):
	output = []
	with open(filename, 'rU') as csvfile:
		rdr = csv.reader(csvfile, delimiter='\t', quotechar='|')
		for row in rdr:
			if (row[0] != 'Course'):
				curr_course = Course(row[0], row[4].strip('"').replace(',', ''), row[5], row[6].strip('"').replace(',', ' '), row[7], row[8], row[9], row[10], row[11], row[12], row[16], row[17], row[18])
				output.append(curr_course)
	#for c in output:
	#	c.print_self()
	return output

def write_new(newfilename, data):
	with open(newfilename, 'wb') as csvfile:
		wrtr = csv.writer(csvfile, delimiter=',') #, quotechar=' ', quoting=csv.QUOTE_ALL)
		wrtr.writerow(["Course", "Title", "CourseType", "Instructor", "StartDate", "EndDate", "Weekdays", "StartTime", "EndTime", "Location", "RoomType", "Enrolled", "Credits"])
		for obj in data:
			wrtr.writerow([obj.code, obj.title, obj.course_type, obj.instructor, obj.start_date, obj.end_date, obj.weekdays, obj.start_time, obj.end_time, obj.location, obj.room_type, obj.enrolled, obj.credits])

def main():
	parsed = parse_file('Fall 2014 Course List and Locations_Computer Science Project.txt')
	write_new('CourseLocations.csv', parsed)

if __name__ == '__main__':
	main()
