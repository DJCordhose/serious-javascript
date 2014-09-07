module personmodule {
    interface Watcher {
        watcher: () => void;
        scope?: any;
    }

    export class Person {
        private watchers: Watcher[];
        constructor(private name: string, private alter: number, private geschlecht: string="F") {
            this.watchers = [];
        }
        getName() {
            this.notify();
            return this.name;
        }
        private notify() {
            this.watchers.forEach(function(watcherWithScope) {
                watcherWithScope.watcher.call(watcherWithScope.scope);
            });
        }
        registerWatcher(watcher, scope?: any) {
            this.watchers.push({
                watcher: watcher,
                scope: scope || null
            });
        }
    }

    export class Customer extends Person {
        preferredArticle: string;
        constructor(name: string, alter: number, geschlecht: string) {
            super(name, alter, geschlecht);
            this.preferredArticle = alter > 40 ? 'Galaxy Note' : 'iPhone';
        }
        shop() {
            return "Shopping: " + this.preferredArticle;
        }

        getName() {
            return "Dear " + super.getName();
        }
    }
}

var olli = new personmodule.Customer('Olli', 42, "M");
//new object, passing this
var obj = {
    message: 'Called object',
    log: function() {
        console.log(this.message);
    }
};
olli.registerWatcher(obj.log, obj);
console.log(olli.getName());

