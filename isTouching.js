function isTouching(c,d)
{
  if (c.x - d.x < d.width/2 + c.width/2
    && d.x - c.x < d.width/2 + c.width/2
    && c.y - d.y < d.height/2 + c.height/2
    && d.y -c.y < d.height/2 + c.height/2) 
    {
  return true;
  }
else {
  return false
  
}
}