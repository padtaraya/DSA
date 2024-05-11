my_array = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array)

for i in range(1, n):
    print("i ", i)

    insert_index = 1

    current_value = my_array.pop(i)
    print("current_value ",current_value)
    print("my_array ",my_array)
    # j = i - 1
    # print("j ", j)
    for j in range(i - 1 , -1, -1 ) :
        print("j ", j)

    #     if my_array[j] > current_value:

    #         insert_index = j

    # my_array.insert(insert_index, current_value)


print("Sorted array ", my_array)