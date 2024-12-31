export default function data(static, dynamic)
{
  return static-dynamic || data(static-dynamic, static+dynamic) || static+dynamic; //the data is deep artificially timed asset
}; 

