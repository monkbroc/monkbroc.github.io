def page_title
  [
    "Julien Vanier",
    data.page.title || "Personal Website"
  ].join(" - ")
end

def page_description
  if data.page.description
    data.page.description
  else
    "This is the personal website of Julien Vanier - Entrepreneur and Developer"
  end
end

def page_keywords
  keywords = %w(julien vanier munirent personal profile projects ideas resume)

  if data.page.keywords
    keywords.concat(dat.page.keywords)
  end

  keywords.uniq.join(", ")
end

