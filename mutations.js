Mongo.Collection.prototype.mutations = function(mutations) {
  const collection = this;

  collection.helpers(_.chain(mutations).map((action, name) => {
    return [name, function(...args) {
      const mutation = action.apply(this, args);
      if (mutation) {
        collection.update(this._id, mutation);
      }
    }];
  }).object().value());
};
