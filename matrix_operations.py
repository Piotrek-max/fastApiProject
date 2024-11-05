def transfrom_text_to_matrix(text: str) -> list | str:
    matrix = []
    text.strip()
    text = text.replace(',', ' ')
    for line in text.split('\n'):
        try:
            matrix.append(list(map(float, line.split())))
        except:
            return 'Matrix is not correct'
    return matrix

def check_if_matrix_multiplication_is_correct(matrix_1: list,matrix_2) -> bool:
    rows = len(matrix_1[0])
    columns = len(matrix_2)
    print(rows, columns)
    if rows==columns:
        for i in range(len(matrix_2[0])):
            if len(matrix_1[i]) != rows:
                return False
    else:
        return False
    return True

def multiply_matrix(matrix1: list, matrix2: list) -> list | str:
    result = []
    if check_if_matrix_multiplication_is_correct(matrix1, matrix2):
        for i in range(len(matrix1)):
            result.append([])
            for j in range(len(matrix2[0])):
                result[i].append(0)
                for k in range(len(matrix2)):
                    result[i][j] += matrix1[i][k] * matrix2[k][j]

    else:
        return 'Matrix multiplication is not possible'
    return result



def multiply_matrix_end(text1, text2):
    matrix1 = transfrom_text_to_matrix(text1)
    matrix2 = transfrom_text_to_matrix(text2)
    if matrix1 == 'Matrix is not correct' or matrix2 == 'Matrix is not correct':
        return 'Matrix is not correct'
    result = multiply_matrix(matrix1, matrix2)
    return result