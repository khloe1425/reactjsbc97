// rxreducer

export const numberReducer = (stateNumber = 10, action) => {
    console.log('numberReducer', action)

    if (action.type == 'CHANGE_NUMBER_ACTION') {
        stateNumber = stateNumber + action.payload
    }

    //reducer tự kiểm tra giá trị state có đổi không => có đổi thì render lại UI, ngược lại thfi ko render lại
    // reducer so sánh địa chỉ ô nhớ
    return stateNumber
}