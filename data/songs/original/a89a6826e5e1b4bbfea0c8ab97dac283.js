// TrashImpossible3699 MMXXIV
// i did make my own sequencer, but i did not compose in ZzFXM. also the same sequencer / concept as this: https://www.reddit.com/r/bytebeat/comments/1gh48lu/depp_bytebeat_cover/

s=10700,
tune=x=>pow(2,x/12),
noise=x=>(z=1e5,sin(x*PI*z*z*z)*z),
dec=x=>(-int(t*x/s)&255),
song=[
  [
   4,,,,
   4,,,,
   4,,,,
   4,,,,
   3,2,,,
   4,,,,
   4,,,,
   4,,4,,
   2,3,,,
   4,,,,
   2,3,,,
   4,,,,
   3,2,,,
   4,,,,
   4,,,,
   4,,,,
 ],
 [
  3,,5,,3,,5,,
  3,,5,,8,,5,,
  3,,5,,3,,5,,
  3,,5,,8,,5,,
  5,,5,,3,,5,,
  3,,5,,8,,5,,
  5,,5,,3,,5,,
  5,,5,,8,,5,,
 ],
 [
  5,5,,5,5,,
  5,5,,5,5,,
  5,5,5,8
 ],
 [5,5,8,7,5,5,8,10,14,14,12,12,16,16,14,12],
],
noipt=song[0][(int(t*8/s))%song[0].length],
lipt1=song[1][(int(t*4/s))%song[1].length],
lipt2=song[2][(int(t*2/s))%song[2].length],
tipt1=song[3][(int(t/4/s))%song[3].length],
pat1=(noise(t>>noipt)*noipt&63)+(t/4*tune(lipt1)&32)+((t/8*tune(lipt2)&63)*dec(512)>>8),
pat2=(noise(t>>noipt)*noipt&63)+(t/4*tune(lipt1)*tune(tipt1)&32)+((t/8*tune(lipt2)*tune(tipt1)&63)*dec(512)>>8),

seq=[
 pat1,
 pat1,
 pat2,
 pat2,
 pat2,
 pat2,
],

seq[(int(t/32/s))%seq.length]