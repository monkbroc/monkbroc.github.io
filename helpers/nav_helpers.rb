def nav_link(page, name)
  link_to name, page, :class => "nav-link #{"active" if current_page.path == page}"
end
