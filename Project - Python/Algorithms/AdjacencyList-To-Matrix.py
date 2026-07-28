def adjacency_list_to_matrix(AdjacencyList):
    
    n = len(AdjacencyList)
    Matrix = [[0] * n for _ in range(n)]

    for i in range(len(AdjacencyList)): 

        for j in range(len(AdjacencyList)):

            if j in AdjacencyList[i]:
                Matrix[i][j] = 1

            else:
                Matrix[i][j] = 0

    for Row in Matrix:
        print(Row)

adjacency_list_to_matrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]})