<template>
    <div>
        <h2 id="syntax" class="title is-4"><a href="#syntax">Syntax</a></h2>
        <p>
            The validation rules have a very simple syntax similar to <a href="https://laravel.com/docs/5.2/validation" class="link">Laravel validation syntax</a>.
            A validation expression is a string of a series of validators separated by a pipe <code class="inline">|</code>:
            <code-block class="language-javascript">
                var single = 'required'; // single rule.
                var multiple = 'required|numeric' // multiple rules.
            </code-block>
            Some rules can have parameters, which are passed in a comma separated list without spaces.
            <code-block class="language-javascript">
                var someRule = 'in:1,2,3,4';
            </code-block>
            <note>
                The validators (rules) and their parameters are statically saved, in order to update some validation rule, you have to attach it again with the new parameters and it will be overwritten.
            </note>
        </p>
        <h2 id="available-validations" class="title is-4"><a href="#available-validations">Available Rules</a></h2>
        <p>
            <code class="inline">vee-validate</code> Comes out of the box with many validation rules, which are:
        </p>
        <div class="columns is-multiline">
            <div v-for="group in rules" :class="'column is-' + 12 / rules.length">
                <ul class="list-circle">
                    <li v-for="rule in group"><router-link class="link" :to="{ name: 'rules', hash: '#rule-' + rule }">{{ rule }}</router-link></li>
                </ul>
            </div>
        </div>
        <div class="rules">
            <note title="note">
                Date validators always require the <code>date_format</code> rule to be always present and must preceed them in the rules order. The date validators are not enabled by default, they require <a href="http://momentjs.com">momentjs</a> in order to work.
                If your setup contains momentjs globally, it will be installed automatically for all validator instances. otherwise you may want to pass the moment reference to <code>installDateTimeValidators(moment)</code> which is available both statically and on instances.

                Also note that the date validators always use the <a href="http://momentjs.com/guides/#/parsing/strict-mode/" class="link">'strict' moment parsing mode</a>.
            </note>
            <note>
                In the rule signature required parameters are enclosed within <code>{}</code> like this: <code>{param}</code>.
                <br>
                Optional parameters have a <code>?</code> at the end: <code>{optional?}</code>.
                <br>
                Lists are enclosed withn brackets <code>[]</code>. ex: <code>[list]</code>.
            </note>
            <div class="rule" id="rule-after">
                <b class="important">after:{target}</b>
                <div class="description">
                    The field under validation must have a valid date and is after the date value in the target field.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">target:</code>The input name to be validated against. must have the same format as the date_format rule.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="date_format:DD/MM/YYYY|after:after_field_target" :class="{'input': true, 'is-danger': errors.has('after_field') }" name="after_field" type="text" placeholder="DD/MM/YYYY">
                        <span v-show="errors.has('after_field')" class="help is-danger">{{ errors.first('after_field') }}</span>
                    </p>
                    <p class="control">
                        <input name="after_field_target" :class="{'input': true, 'is-danger': errors.has('after_field') }" type="text" placeholder="DD/MM/YYYY">
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-alpha">
                <b class="important">alpha</b>
                <div class="description">
                    The field under validation may only contain alphabetic characters.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="alpha" :class="{'input': true, 'is-danger': errors.has('alpha_field') }" name="alpha_field" type="text" placeholder="Enter Some Characters...">
                        <span v-show="errors.has('alpha_field')" class="help is-danger">{{ errors.first('alpha_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-alpha_dash">
                <b class="important">alpha_dash</b>
                <div class="description">
                    The field under validation may contain alphabetic characters, numbers, dashes or underscores.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="alpha_dash" :class="{'input': true, 'is-danger': errors.has('alpha_dash_field') }" name="alpha_dash_field" type="text" placeholder="Enter characters or dashes">
                        <span v-show="errors.has('alpha_dash_field')" class="help is-danger">{{ errors.first('alpha_dash_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-alpha_num">
                <b class="important">alpha_num</b>
                <div class="description">
                    The field under validation may contain alphabetic characters or numbers.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="alpha_num" :class="{'input': true, 'is-danger': errors.has('alpha_num_field') }" name="alpha_num_field" type="text" placeholder="Enter characters and numbers">
                        <span v-show="errors.has('alpha_num_field')" class="help is-danger">{{ errors.first('alpha_num_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-before">
                <b class="important">before:{target}</b>
                <div class="description">
                    The field under validation must have a valid date and is before the date value in the target field.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="date_format:DD/MM/YYYY|before:before_field_target" :class="{'input': true, 'is-danger': errors.has('before_field') }" name="before_field" type="text" placeholder="DD/MM/YYYY">
                        <span v-show="errors.has('before_field')" class="help is-danger">{{ errors.first('before_field') }}</span>
                    </p>
                    <p class="control">
                        <input name="before_field_target" :class="{'input': true, 'is-danger': errors.has('alpha_field') }" type="text" placeholder="DD/MM/YYYY">
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-between">
                <b class="important">between:{min},{max}</b>
                <div class="description">
                    The field under validation must have a numeric value bounded by a minimum value and a maximum value.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">min:</code> The minimum value.</li>
                        <li><code class="inline">max:</code> The maximum value.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="between:1,11" :class="{'input': true, 'is-danger': errors.has('between_field') }" name="between_field" type="text" placeholder="Enter a number between 1 and 11">
                        <span v-show="errors.has('between_field')" class="help is-danger">{{ errors.first('between_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-confirmed">
                <b class="important">confirmed:{target}</b>
                <div class="description">
                    The field under validation must have the exact same value as the confirmation field.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">target:</code> The name of the confirmation field.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="confirmed:pw_confirm" :class="{'input': true, 'is-danger': errors.has('confirm_field') }" name="confirm_field" type="password" placeholder="Enter The Password">
                        <span v-show="errors.has('confirm_field')" class="help is-danger">{{ errors.first('confirm_field') }}</span>
                    </p>
                    <p class="control">
                        <input name="pw_confirm" :class="{'input': true, 'is-danger': errors.has('confirm_field') }" type="password" placeholder="Confirm the password">
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-date_between">
                <b class="important">date_between:{min,max}</b>
                <div class="description">
                    The field under validation must be a valid date between the two dates specified.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">min:</code>The minimum allowed value for date. must be in the same format as the date_format rule.</li>
                        <li><code class="inline">max:</code>The maximum allowed value for date. must be in the same format as the date_format rule.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="date_format:DD/MM/YYYY|date_between:10/09/2016,20/09/2016" :class="{'input': true, 'is-danger': errors.has('date_between_field') }" name="date_between_field" type="text" placeholder="DD/MM/YYYY betweem 10/09/2016 and 20/09/2016">
                        <span v-show="errors.has('date_between_field')" class="help is-danger">{{ errors.first('date_between_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-date_format">
                <b class="important">date_format:{format}</b>
                <div class="description">
                    The field under validation must be a valid date in the specified format. This rule must be present when using any date rules.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">format:</code> The date format. See <a href="http://momentjs.com/docs/#/parsing/string-format/">momentjs parsing.</a></li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="date_format:DD/MM/YYYY" :class="{'input': true, 'is-danger': errors.has('date_format_field') }" name="date_format_field" type="text" placeholder="DD/MM/YYYY">
                        <span v-show="errors.has('date_format_field')" class="help is-danger">{{ errors.first('date_format_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-decimal">
                <b class="important">decimal:{decimals?}</b>
                <div class="description">
                    The field under validation must be numeric and may contain the specified amount of decmial points.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">decmials:</code> The maximum allowed number of decimal point numbers. Not passing the decmials will accept numeric data which may or may not contain decimal point numbers.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="decimal:3" :class="{'input': true, 'is-danger': errors.has('decimal_field') }" name="decimal_field" type="text" placeholder="Numeric value with decimals">
                        <span v-show="errors.has('decimal_field')" class="help is-danger">{{ errors.first('decimal_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-digits">
                <b class="important">digits:{length}</b>
                <div class="description">
                    The field under validation must be numeric and have the specified number of digits.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">length:</code> The number of digits.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="digits:3" :class="{'input': true, 'is-danger': errors.has('digits_field') }" name="digits_field" type="text" placeholder="Enter 3 digit number">
                        <span v-show="errors.has('digits_field')" class="help is-danger">{{ errors.first('digits_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-dimensions">
                <b class="important">dimensions:{width},{height}</b>
                <div class="description">
                    The file added to the field under validation must be an image (jpg,svg,jpeg,png,bmp,gif) have the exact specified dimensions.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">width:</code> The width of the image.</li>
                        <li><code class="inline">height:</code> The height of the image.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="dimensions:30,30" data-as="image" name="dimensions_field" type="file">
                        <span v-show="errors.has('dimensions_field')" class="help is-danger">{{ errors.first('dimensions_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-email">
                <b class="important">email</b>
                <div class="description">
                    The field under validation must be a valid email.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="email" data-as="email" :class="{'input': true, 'is-danger': errors.has('email_field') }" name="email_field" type="text" placeholder="Your Email">
                        <span v-show="errors.has('email_field')" class="help is-danger">{{ errors.first('email_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-ext">
                <b class="important">ext:[extensions]</b>
                <div class="description">
                    The file added the field under validation must have one of the extensions specified.
                </div>
                <div class="args">
                    <code class="inline">args:</code> Comma separated list of extensions. ex: <code class="inline">ext:jpg,png,bmp,svg</code>.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="ext:jpeg,jpg" data-as="field" name="ext_field" type="file">
                        <span v-show="errors.has('ext_field')" class="help is-danger">{{ errors.first('ext_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-image">
                <b class="important">image</b>
                <div class="description">
                    The file added the field under validation must have an image mime type (image/*).
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="image" data-as="image" name="image_field" type="file">
                        <span v-show="errors.has('image_field')" class="help is-danger">{{ errors.first('image_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-in">
                <b class="important">in:[list]</b>
                <div class="description">
                    The field under validation must have a value that is in the specified list.
                </div>
                <div class="args">
                    <code class="inline">args:</code> Comma separated list of values. ex <code class="inline">in:1,2,3,4</code>
                </div>
                <div>
                    <p class="control">
                        <span class="select">
                            <select v-validate data-rules="in:1,2,3" :class="{ 'is-danger': errors.has('in_field') }" name="in_field" data-as="selected">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Invalid</option>
                            </select>
                        </span>
                        <span v-show="errors.has('in_field')" class="help is-danger">{{ errors.first('in_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-ip">
                <b class="important">ip</b>
                <div class="description">
                    The field under validation must have a string that is a valid ipv4 value.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="ip" data-as="ip" :class="{'input': true, 'is-danger': errors.has('ip_field') }" name="ip_field" type="text" placeholder="Your IP Address">
                        <span v-show="errors.has('ip_field')" class="help is-danger">{{ errors.first('ip_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-max">
                <b class="important">max:{length}</b>
                <div class="description">
                    The field under validation length may not exceed the specified length.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">length:</code> A numeric value representing the maximum number of characters.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="max:11" data-as="field" :class="{'input': true, 'is-danger': errors.has('max_field') }" name="max_field" type="text" placeholder="11 Characters or shorter">
                        <span v-show="errors.has('max_field')" class="help is-danger">{{ errors.first('max_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-mimes">
                <b class="important">mimes:[list]</b>
                <div class="description">
                    The file type added to the field under validation should have one of the specified mime types.
                </div>
                <div class="args">
                    <code class="inline">args:</code> List of comma separated mime types. <code class="inline">mimes:image/jpeg|image/png</code>
                </div>
                <div>
                    <p class="control">
                        <label class="label">Image File</label>
                        <input v-validate data-rules="mimes:image/*" data-as="image" name="mimes_field" type="file">
                        <span v-show="errors.has('mimes_field')" class="help is-danger">{{ errors.first('mimes_field') }}</span>
                    </p>
                </div>
                <note>
                    You can use '*' to specify a wild card, something like <code>mimes:image/*</code> will accept all image types.
                </note>
            </div>
            <div class="rule" id="rule-min">
                <b class="important">min:{length}</b>
                <div class="description">
                    The field under validation length should not be less than the specified length.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">length:</code> A numeric value representing the minimum number of characters.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="min:3" data-as="field" :class="{'input': true, 'is-danger': errors.has('min_field') }" name="min_field" type="text" placeholder="Min: 3">
                        <span v-show="errors.has('min_field')" class="help is-danger">{{ errors.first('min_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-not_in">
                <b class="important">not_in:[list]</b>
                <div class="description">
                    The field under validation length should not have any value within the specified values.
                </div>
                <div class="args">
                    <code class="inline">args:</code> Comma separated list of invalid values. ex: <code class="inline">not_in:1,2,3,4</code>
                </div>
                <div>
                    <p class="control">
                        <span class="select">
                            <select v-validate data-rules="not_in:1,2,3" :class="{ 'is-danger': errors.has('not_in_field') }" name="not_in_field" data-as="selected">
                                <option value="1">One - Invalid</option>
                                <option value="2">Two - Invalid</option>
                                <option value="3">Three - Invalid</option>
                                <option value="4">Four - Valid</option>
                            </select>
                        </span>
                        <span v-show="errors.has('not_in_field')" class="help is-danger">{{ errors.first('not_in_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-numeric">
                <b class="important">numeric</b>
                <div class="description">
                    The field under validation must only consist of numbers.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="numeric" data-as="field" :class="{'input': true, 'is-danger': errors.has('numeric_field') }" name="numeric_field" type="text" placeholder="Numbers only">
                        <span v-show="errors.has('numeric_field')" class="help is-danger">{{ errors.first('numeric_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-regex">
                <b class="important">regex:{pattern}</b>
                <div class="description">
                    The field under validation must match the specified regular expression.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">pattern:</code> A regular expression</li>
                        <li><code class="inline">flags:</code> list of regular expression flags (optional)</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <label class="label">Regex: ^([0-9]+)$</label>
                        <input v-validate data-rules="regex:^([0-9]+)$" data-as="field" :class="{'input': true, 'is-danger': errors.has('regex_field') }" name="regex_field" type="text" placeholder="Numbers only">
                        <span v-show="errors.has('regex_field')" class="help is-danger">{{ errors.first('regex_field') }}</span>
                    </p>
                </div>
                <note>
                    You should not use the pipe | within your regular expression in the HTML as it will cause a conflict with how validators parsing work. A workaround is to attach the field programatically and pass the regex there.
                </note>
            </div>
            <div class="rule" id="rule-required">
                <b class="important">required</b>
                <div class="description">
                    The field under validation must have a non-empty value. by default all validators pass the validation if they have "empty values" unless they are required. those empty values are: empty string, undefined, null.
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="required" data-as="field" :class="{'input': true, 'is-danger': errors.has('required_field') }" name="required_field" type="text" placeholder="Is Required">
                        <span v-show="errors.has('required_field')" class="help is-danger">{{ errors.first('required_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-size">
                <b class="important">size:{kb}</b>
                <div class="description">
                    The file size added to the field under validation must not exceed the specified size in kilobytes.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">size:</code> The maximum file size in kilobytes.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="size:10" name="size_field" data-as="file" type="file">
                        <span class="help is-danger" v-show="errors.has('size_field')">{{ errors.first('size_field') }}</span>
                    </p>
                </div>
            </div>
            <div class="rule" id="rule-url">
                <b class="important">url:{domain?}</b>
                <div class="description">
                    The field under validation must be a valid url. A domain may be optionally passed. supports subdomains.
                </div>
                <div class="args">
                    <span class="args__title">args:</span>
                    <ul>
                        <li><code class="inline">domain:</code> Adds another check if the url belongs to a specific domain. tlds should improve the accuracy.</li>
                    </ul>
                </div>
                <div>
                    <p class="control">
                        <input v-validate data-rules="url:google.com" data-as="field" :class="{'input': true, 'is-danger': errors.has('url_field') }" name="url_field" type="text" placeholder="Enter a google.com domain url">
                        <span v-show="errors.has('url_field')" class="help is-danger">{{ errors.first('url_field') }}</span>
                    </p>
                </div>
            </div>
        </div>
        <h2 id="custom-rules" class="title is-4"><a href="#custom-rules">Custom Rules</a></h2>
        <p>
            You can easily add custom rules to the validators, but your custom validation rules must adhere to a contract, or certain structure:
            <br><br>
            <b class="important">Function Form:</b>
            This is the most basic custom validator form, it consists of only a function that returns either a Boolean or a promise. However it will have a default error message.
            <code-block class="language-javascript">
                const validator = (value, args) =&gt; {
                    // Return a Boolean or a Promise.
                }
            </code-block>
            <b class="important">Object Form:</b>
            <code-block class="language-javascript">
                const validator = {
                    getMessage(field, args) { // will be added to default English messages.
                        // Returns a message.
                    },
                    validate(value, args) {
                        // Returns a Boolean or a Promise.
                    }
                };
            </code-block>
            <b class="important">Localized Object Form:</b>
            <code-block class="language-javascript">
                const validator = {
                    messages: {
                        en: (field, args) =&gt; {
                            // Returns a message.
                        },
                        cn: (field, args) =&gt; {
                            // Returns a Chinese message.
                        }
                    },
                    validate(value, args) {
                        // Returns a Boolean or a Promise.
                    }
                };
            </code-block>
            This validator form must have a <code class="inline">validate</code> method, and either a <code class="inline">getMessage</code> method, or a <code class="inline">messages</code> object.
            The only difference that the latter will allow you to add localized messages, the former only adds it to the English dictionary.

            <note>
                Notice how the <code>messages</code> methods gets passed the <code>field</code> which is the name of the field under validation as a first parameter.
                And how the <code>validate</code> method gets passed the value as a first parameter.
                And both receive the <code>args</code> which are the parameters (arguments) that were configured with the validation rule.
                for example look at the <a href="https://github.com/logaretm/vee-validate/blob/master/src/rules/min.js">actual implementation of the min rule</a>.
            </note>
            <note>
                As you can see a validation rule must implement one of the three forms discussed above.
                 Not doing so will throw a <code>ValidatorException</code> with a suitable error message detailing what were you missing.
            </note>
        </p>
        <p>
            After creating your validator, You can add it to the list of rules using <code class="inline">extend(name, validator)</code> method in the validator instance.
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';
                // These are 'ES6' arrow functions.
                Validator.extend('truthy', {
                    getMessage: field =&gt; 'The ' + field + ' value is not truthy.',
                    validate: value =&gt; !! value
                });

                let instance = new Validator({
                    trueField: 'truthy'
                });

                // Also there is an instance 'extend' method for convience.
                instance.extend('falsy', (value) =&gt; ! value);
                instance.attach('falseField', 'falsy');
            </code-block>
            <note>
                Using any of the <code>extend</code> either statically or on an instance will extend all validators with the new validation rule.
                extending a new rule that have the same name as an existing rule will throw a <code>ValidatorException</code> with an error message.
            </note>
        </p>
        <h2 id="custom-messages" class="title is-4"><a href="#custom-messages">Custom Messages</a></h2>
        <p>
            Of course you might need to overwrite the error messages, or add new ones. The Validator class and its instances provide an <code class="inline">updateDictionary</code> method.
            which will merge the messages with the internal dictionary, overwriting any duplicates.
            <note>
                Any merges will have an effect on all validator instances as the messages dictionary is shared.
            </note>
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';

                const dictionary = {
                    en: {
                        messages: {
                            alpha: () =&gt; 'Some English Message'
                        }
                    },
                    ar: {
                        messages: {
                            alpha: () =&gt; 'Some Arabic Message'
                        }
                    }
                };

                Validator.updateDictionary(dictionary);

                const validator = new Validator({ first_name: 'alpha' });
                validator.setLocale('ar'); // now this validator will generate messages in arabic.
            </code-block>
            <p>
                Usually you would stucture your language files for your app rather than adding hardcoded strings like the example above, check the <router-link class="link" :to="{ name: 'localization' }">localization guide</router-link> for a better approach.
            </p>
            <note>
                You must provide the messages in an object path like: <code>dictionary.locale.message</code>.
            </note>
        </p>
        <h2 id="custom-attributes" class="title is-4"><a href="#custom-attributes">Custom Attributes</a></h2>
        <p>
            Like the custom messages, the validators share a dictionary containing the attribute names, for example if you want to use "Email Address" instead of "email" in your error messages, this can be easily acheived by including an <code>attributes</code> object in the dictionary.
            <br><br>Unlike messages, no attributes are included in the default dictionary.
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';

                const dictionary = {
                    en: {
                        attributes: {
                            email: 'Email Address'
                        }
                    },
                    ar: {
                        attributes: {
                            email: 'البريد الاليكتروني'
                        }
                    }
                };

                Validator.updateDictionary(dictionary);
            </code-block>

            <note>
                If the attribute is not found for the current locale, it will fallback to the binding expression or the field name. If you use the <router-link :to="{ name: 'localization', hash: '#attributes-data-as' }">data-as</router-link> attribute it will take precedence over the internal dictionary.
            </note>
        </p>
    </div>
</template>


<script>
import Collection from 'collectionsjs';
import data from './../data.json';

export default {
    data: () => ({
        rules: new Collection(data.rules).chunk(10).all()
    })
};
</script>
