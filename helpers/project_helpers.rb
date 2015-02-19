def project_code(project)
  project.title.gsub(/[^0-9a-zA-Z]/, "").downcase
end

def project_image(project)
  "#{project_code(project)}.#{project.image_ext}"
end

def project_thumb(project)
  "#{project_code(project)}-thumb.#{project.image_ext}"
end
