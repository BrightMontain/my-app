export default function data(static, dynamic)
{
  return static-dynamic || data(static-dynamic, static+dynamic) || static+dynamic; //recursive function can be controlled outside the class to learn
}; 

