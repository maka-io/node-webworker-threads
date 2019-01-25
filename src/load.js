// Generated by LiveScript 1.5.0
var onmessage, this$ = this;
function addEventListener(event, cb){
  return this.thread.on(event, cb);
}
function close(){
  return this.thread.emit('close');
}
function importScripts(){
  var pos, i$, len$, p, escAbsolute, results$ = [];
  pos = -1;
  if (this.thread.__filename) {
    pos = this.thread.__filename.lastIndexOf('/');
    if (pos === -1) {
      pos = this.thread.__filename.lastIndexOf('\\');
    }
  }
  for (i$ = 0, len$ = (arguments).length; i$ < len$; ++i$) {
    p = (arguments)[i$];
    if (pos >= 0 && !/^(?:[a-z]+:)?\/\//i.test(p)) {
      self.console.log("  resolving " + p + " against " + this.thread.__filename.substring(0, pos + 1) + ", cwd " + this.thread.__cwd);
      if (p[0] === '!') {
        escAbsolute = p[1] !== '!';
        p = p.substring(1);
        self.console.log("  ... removed escape character for absolute path: " + p);
      }
      if (!escAbsolute && (!this.thread.__cwd || p.indexOf(this.thread.__cwd) !== 0)) {
        p = this.thread.__filename.substring(0, pos + 1) + p;
      } else {
        self.console.log("  ... do not resolve absolute " + p);
      }
    }
    results$.push(self.eval(native_fs_.readFileSync(p, 'utf8')));
  }
  return results$;
}
onmessage = null;
thread.on('message', function(args){
  return typeof onmessage == 'function' ? onmessage(args) : void 8;
});
