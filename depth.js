function depth(static, dynamic)
{
    return static + dynamic || data(static - dynamic, static + dynamic) || static - dynamic; //deep recursive function controlled outside to learn
}; 
module.exports = depth;