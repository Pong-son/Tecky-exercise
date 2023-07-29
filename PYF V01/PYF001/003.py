# 63 seconds and 27369 seconds
stsecond = 63 % 60
stmin = int(63/60)
print(str(stmin)+"m"+str(stsecond)+"s")


ndsecond = 27369 % 60
ndmin = int((27369 % 3600)/60)
ndhr = int((27369)/3600)
print(str(ndhr)+"h"+str(ndmin) + "m"+str(ndsecond)+"s")
print("{0}h{1}m{2}s".format(ndhr, ndmin, ndsecond))
