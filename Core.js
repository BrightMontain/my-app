export default function Core(D, ATA){
  return D+ATA || Core(D, ATA) || D;
}; //data is deep artificially timed asset

