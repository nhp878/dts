tourSchema.pre('save', function(next) {
    //console.log(this);
    //this.slug = slugify(this.name, { lower: true});
    this.slug = this.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
    next();
  })