# -*- coding: UTF-8 -*-
# unit of value is Bytes
def size_expend(value):
	units = ["Bytes", "KB", "MB", "GB", "TB"]
	output = []
	num = value
	for unit in units:
		if num <= 0 :
			break
		tmp = str(num & 1023) + " " + unit
		output.append(tmp)
		num = num >> 10
	output.reverse()
	print ",".join(output)

size_expend(1553032)
# &和%都能求余，但是&只能求余2^n的余数