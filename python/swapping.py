my_array = [63, 77, 22, 55, 21, 12, 123, 26]

n = len(my_array)

for i in range(n) :
    min_index = i
    for j in range(i + 1, n): 
        if my_array[j] < my_array[min_index] :
            min_index = j
    my_array[i], my_array[min_index] = my_array[min_index], my_array[i]

print("Sorted array: ", my_array)