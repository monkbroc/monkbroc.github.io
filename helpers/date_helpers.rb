def date_short(d)
  if d.is_a? String
    d = Date.parse d
  end

  format = if d.year == Time.current.year
             "%b %-d"
           else
             "%b %-d %Y"
           end

  d.strftime format
end
