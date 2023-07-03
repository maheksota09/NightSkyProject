for i in range(0, 20000):
    sum = 2*i
    print(sum)


# will query results from postgresql, or rather keep results in some file instead, it might be faster that way
# for each satellite in list
    # parse TLE data
    # use either skyfield, pyephem, or astropy to calculate orbital positioning of the object
    # relative to where the observer's location is
    # if "view" is obstructed
        # add satellite to list of sats_dimmed

# after list is created
# if len(sats_dimmed) != 0
    # format in a json and submit request to "actual satellites"
    # if successfully submitted request
        # return sats_dimmed + successful request
    # else 
        # return sats_dimmed + error message 
# else
    # return no satellites need to be dimmed message to user
