var maxArea = function(height) {
    let product = 0
    let start = 0 
    let end = height.length -1
    while (start < end) {
        product = Math.max(product, (end - start) * Math.min(height[start], height[end]))
        if (height[start] < height[end]) {
            start +=1
        }
        else end -= 1
    }
    return product
};