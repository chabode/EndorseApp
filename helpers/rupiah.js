function Rupiah(value){
  let num = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')
  return (num)
}

module.exports = Rupiah