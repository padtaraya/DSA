my_array = [64, 34, 55, 22, 12, 45, 99]

n = len(my_array)

for i in range(n - 1):
    print("i ",i)
    min_index = 1

    for j in range(i + 1, n): 


        if my_array[j] < my_array[min_index]:

            min_index = j

    min_value = my_array.pop(min_index)

    my_array.insert(i,min_value)


    

print("Sort array: ", my_array)
