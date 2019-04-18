function kEmptySlots(flowers, k) {
    const garden = new Array(flowers.length);
    for (let i = 0; i < flowers.length; i++) {
        garden[flowers[i]] = true;
        //or kEmptySlotsEnhanced(<args>)
        if (kEmptySlotsSatisfied(garden, k, i)) {
            return i;
        }
    }
}

function kEmptySlotsSatisifed(garden, k) {
    let start = -1, end = -1;
    for (let i = 0; i < garden.length; i++) {
        if (start === -1) {
            start = i;
        } else if (garden[i]) {
            end = i;
            if ((end-start) === k) {
                return i;
            }
            start = end;
        }
    }
}

function kEmptySlotsSatisifiedEnhanced(garden, k, i) {
    if ((i-k >= 0 && garden[i-k]) || (i+k < garden.length && garden[i+k])) {
        return true;
    }
    return false;
}